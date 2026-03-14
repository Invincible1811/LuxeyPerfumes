import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, amount, items, callbackUrl } = body;

    if (!email || !amount) {
      return NextResponse.json(
        { error: "Email and amount are required" },
        { status: 400 }
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;
    if (!secretKey) {
      return NextResponse.json(
        { error: "Payment configuration error" },
        { status: 500 }
      );
    }

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secretKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount: Math.round(amount * 100), // Paystack expects amount in pesewas
        currency: "GHS",
        callback_url: callbackUrl || `${request.nextUrl.origin}/checkout/success`,
        metadata: {
          custom_fields: [
            {
              display_name: "Order Items",
              variable_name: "items",
              value: items || "N/A",
            },
          ],
        },
      }),
    });

    const data = await response.json();

    if (!data.status) {
      return NextResponse.json(
        { error: data.message || "Failed to initialize payment" },
        { status: 400 }
      );
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url,
      reference: data.data.reference,
    });
  } catch (error) {
    console.error("Paystack API error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

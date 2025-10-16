import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "All fields are required." }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Simply Music India <onboarding@resend.dev>",
      to: "ikartikay.awasthi@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Resend Error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}

// ✅ GET route just for testing in browser
export async function GET() {
  return new Response(
    JSON.stringify({
      message: "✅ API route working! Use POST to send emails.",
      keyLoaded: !!process.env.RESEND_API_KEY,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    }
  );
}

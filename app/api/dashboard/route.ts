import { NextResponse } from "next/server";

// Fetch quotes from external API
export async function GET() {
    const res = await fetch(`https://api.freeapi.app/api/v1/public/quotes?page=1&limit=2&query=human`);
    
    if (!res.ok) {
        return NextResponse.json({ error: "Failed to fetch quotes" }, { status: res.status });
    }

    const data = await res.json();
    console.log(data)
    return NextResponse.json(data.data); // Ensure you return the data directly here
}

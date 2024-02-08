import { Users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET() {
    const data = Users
    return NextResponse.json({ result: data, success: true }, { status: 200 });
}

export async function POST(req, res) {
    const data = await req.json();
    if (!data.name || !data.age || !data.email) {
        return NextResponse.json({ result: 'Please try again data not valid', success: false }, { status: 400 })
    }
    return NextResponse.json({ result: 'User Created Successfully!', success: true }, { status: 200 })
}
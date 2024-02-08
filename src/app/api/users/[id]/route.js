import { Users } from "@/util/db";
import { NextResponse } from "next/server";

export async function GET(req, res) {
    const data = Users
    const id = res.params.id
    const result = data.filter((user) => user.id == id)
    if (id) {
        return NextResponse.json({ result: result[0], success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: 'user not found', success: false }, { status: 400 })
    }
}


export async function PUT(req, res) {
    let data = await req.json();
    data.id = res.params.id
    if (data.id) {
        return NextResponse.json({ result: 'user updated successfully!', success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: 'updated Data not valid', success: false }, { status: 400 })
    }
}


export async function DELETE(req, res) {
    let id = await res.params.id;
    if (id) {
        return NextResponse.json({ result: 'user deleted successfully', success: true }, { status: 200 })
    } else {
        return NextResponse.json({ result: 'internal error something wrong', success: false }, { status: 400 })
    }
}
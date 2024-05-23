import dbConnect from '@/app/utils/dbConnect';
import Register from "@/app/models/register";
import {NextResponse} from "next/server";

export async function POST(req, res) {
    try {

        const body = await req.json();
        await dbConnect();

        await Register.create(body);

        return NextResponse.json({
            message:"Account created successfully!"
        }, {
            status: 200
        })

    }catch (e) {
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        )
    }
}
// import { NextResponse } from "next/server";

// export function GET(request, context) {
//     const userId = context.params.userId

//     return NextResponse.json({
//         userId
//     })

// }    
import { NextResponse } from "next/server";

export async function GET(request, {params}) {
    const {userid} = await params;

    return NextResponse.json({
        userId: userid
    })
}


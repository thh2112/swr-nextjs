import axiosClient from "@/core/axios-config";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  console.log('ngu');
  try {
    const authorization = request.headers.get("Authorization");

    const { data } = await axiosClient.get(
      "https://reqres.in/api/users/2",
      {
        headers: {
          authorization,
        },
      },
    );
    return Response.json({
      status: 200,
      data: data.data,
    });
  } catch (error) {
    return Response.json({
      status: 500,
      message: "Error",
    });
  }
}

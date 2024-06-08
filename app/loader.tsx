"use client";

import { BounceLoader } from "react-spinners";

import Box from "@/app/components/Box";

const Loading = () => {
    return (
        <Box className="h-full flex items-center justify-center">
            <BounceLoader color="#3b22c5" size={40} />
        </Box>
    );
}

export default Loading;

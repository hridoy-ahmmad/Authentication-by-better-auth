import React from 'react';
// path to your Better Auth server instance
import { headers } from "next/headers";
import { auth } from '@/lib/auth';
import { redirect } from 'next/navigation';

const DaxhBoard = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    if (!session) {
        return redirect('/signin')

    }

    return (
        <div>
            Dashing board
        </div>
    );
};

export default DaxhBoard;
import React from 'react';
import {Card, CardHeader, CardTitle, CardContent} from "@/components/ui/card";
import {ShieldCheck, Lock} from 'lucide-react';
import {OpenAPIV3} from 'openapi-types';
import AuthDialog from './AuthDialog';
import {Button} from "@/components/ui/button"; // Nouveau import

interface AuthBlockProps {
    securitySchemes: {
        [key: string]: OpenAPIV3.ReferenceObject | OpenAPIV3.SecuritySchemeObject
    }
}

const AuthBlock: React.FC<AuthBlockProps> = ({securitySchemes}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center text-xl font-semibold">
                    <ShieldCheck className="mr-2 h-5 w-5 text-primary"/>
                    Authentication
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <AuthDialog securitySchemes={securitySchemes}>
                    <Button variant={"outline"}
                            className="w-full p-2 border rounded-lg border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
                        <Lock className="w-5 h-5 mr-2"/>
                        Authorize
                    </Button>
                </AuthDialog>
            </CardContent>
        </Card>
    );
};

export default AuthBlock;
import React from 'react';
import Image from 'next/image';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer'; 
export default function NotFound() {
    return (
        <>
          <Navbar />
          <div className="h-[80vh] w-[60vw] relative flex flex-col items-center justify-start container mx-auto my-8 px-4 py-8 space-y-16 text-foreground ">
            <Image
              src={"/images/underConstruction.png"}
              alt="Under Construction"
              layout="fill"
              objectFit="cover"
              priority
              className="z-0"
            />
            <Alert className="w-auto max-w-md bg-background/50 border-primary z-10">
              <AlertTitle className="text-2xl font-bold mb-2 text-primary">Page Under Construction</AlertTitle>
              <AlertDescription className="text-lg text-foreground">
                Hello! We are working hard to bring you something amazing! 🚧
              </AlertDescription>
            </Alert>
          </div>
          <Footer />
        </>
      );
}
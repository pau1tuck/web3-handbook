import { ScrollArea } from "@/components/ui/scroll-area";
import {} from "@/components/ui/sheet";
import { ROUTES } from "@/lib/config";
import Anchor from "./anchor";

export function Leftbar() {
    return (
        <aside className="md:flex hidden flex-[0.9] min-w-[230px] sticky top-16 flex-col h-[92.75vh] overflow-y-auto">
            <ScrollArea className="py-4">
                {ROUTES.map(({ title, href, chapters }: any) => {
                    return (
                        <div className="flex flex-col gap-3 mt-5" key={href}>
                            <h4 className="font-medium text-sm">{title}</h4>
                            <div className="flex flex-col gap-3 text-sm dark:text-neutral-300/85 text-neutral-800 ml-0.5">
                                {chapters?.map((subItem: any) => {
                                    const key = `${href}${subItem.href}`;
                                    return (
                                        <Anchor activeClassName="font-medium text-primary" href={key} key={key}>
                                            {subItem.title}
                                        </Anchor>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </ScrollArea>
        </aside>
    );
}

import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { ROUTES, config } from "@/lib/config";
import { AlignLeftIcon } from "lucide-react";
import Anchor from "./anchor";
import { FooterButtons } from "./footer";
import { Logo } from "./logo";
import { Button } from "./ui/button";

export function SheetLeftbar() {
    return (
        <Sheet>
            <SheetTrigger asChild={true}>
                <Button variant="ghost" size="icon" className="md:hidden flex">
                    <AlignLeftIcon />
                </Button>
            </SheetTrigger>

            <SheetContent className="flex flex-col gap-4 px-0" side="left">
                <SheetHeader>
                    <SheetClose className="px-5" asChild={true}>
                        <Logo />
                    </SheetClose>
                </SheetHeader>
                <ScrollArea className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2 mt-3 mx-2 px-8">
                        {config.sections.map(item => {
                            return (
                                <SheetClose asChild={true} key={item.title + item.href}>
                                    <Anchor
                                        activeClassName="text-black dark:text-white font-medium"
                                        absolute={true}
                                        href={item.href}
                                    >
                                        {item.title}
                                    </Anchor>
                                </SheetClose>
                            );
                        })}
                    </div>
                    <div className="mx-2 px-8">
                        {ROUTES.map(({ href, title, chapters }: any) => {
                            return (
                                <div className="flex flex-col gap-3 mt-5" key={href}>
                                    <h4 className="font-medium">{title}</h4>
                                    <div className="flex flex-col gap-3 dark:text-neutral-300/85 text-neutral-800 ml-0.5">
                                        {chapters?.map((subItem: any) => {
                                            const key = `${href}${subItem.href}`;
                                            return (
                                                <SheetClose asChild={true} key={key}>
                                                    <Anchor
                                                        activeClassName="font-medium dark:text-white text-black"
                                                        href={key}
                                                    >
                                                        {subItem.title}
                                                    </Anchor>
                                                </SheetClose>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className="p-8 pb-4 flex gap-2">
                        <FooterButtons />
                    </div>
                </ScrollArea>
            </SheetContent>
        </Sheet>
    );
}

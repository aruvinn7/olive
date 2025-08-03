"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import Image from "next/image";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period?: string;
  description?: string;
  certificateUrl?: string;
  date?: string;
  showChevron?: boolean;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  certificateUrl,
  date,
  showChevron,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const router = useRouter();

  const handleClick = () => {
    if (description) {
      setIsExpanded(!isExpanded);
    } else if (href) {
      router.push(href);
    }
  };

  return (
    <Card
      className={cn("flex cursor-pointer", isExpanded && "bg-muted/50")}
      onClick={handleClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex-none">
        <Avatar className="border size-12 m-auto bg-muted-background dark:bg-foreground">
          <AvatarImage
            src={logoUrl}
            alt={altText}
            className="object-contain"
          />
          <AvatarFallback>{altText[0]}</AvatarFallback>
        </Avatar>
      </div>

      <div className="flex-grow ml-4 items-center flex-col group">
        <CardHeader>
          <div className="flex items-center justify-between gap-x-2 text-base">
            <h3 className="inline-flex items-center justify-center font-semibold leading-none text-xs sm:text-sm">
              {title}
              {badges && (
                <span className="inline-flex gap-x-1 ml-2">
                  {badges.map((badge, index) => (
                    <Badge
                      variant="secondary"
                      className="align-middle text-xs"
                      key={index}
                    >
                      {badge}
                    </Badge>
                  ))}
                </span>
              )}
              {showChevron && (
                <ChevronRightIcon
                  className={cn(
                    "size-4 ml-1 transform transition-transform duration-300",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              )}
            </h3>
            <div className="text-xs sm:text-sm tabular-nums text-muted-foreground text-right">
              {period}
              {date && <div className="font-sans text-xs">{date}</div>}
            </div>
          </div>
          {subtitle && (
            <div className="font-sans text-xs text-muted-foreground">
              {subtitle}
            </div>
          )}
        </CardHeader>

        {certificateUrl && (
          <div className="mt-2">
            <a
              href={certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()} // agar tidak toggle expand
            >
              <Image
                src={certificateUrl}
                alt="Certificate"
                width={200}
                height={200}
                className="rounded shadow border"
              />
            </a>
          </div>
        )}

        {description && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.7,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-2 text-xs sm:text-sm overflow-hidden"
          >
            {description}
          </motion.div>
        )}
      </div>
    </Card>
  );
};

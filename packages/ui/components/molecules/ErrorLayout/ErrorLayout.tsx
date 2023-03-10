import Button from "../../atoms/Button";
import type { ButtonProps } from "../../atoms/Button/Button";
import RichText from "../../atoms/RichText";
import { SECTION_MARGIN_MAP, SPACING } from "../../../lib/globals/sizings";
import Image from "../../atoms/SafeImage";
import React from "react";
import type { MandatoryImageProps } from "../../../types/global";
import { useRouter } from "next/router";

export interface ErrorLayoutProps {
  code: number;
  title: string;
  description: string;
  primaryCTA: ButtonProps;
  showBackToHome?: boolean;
  image: MandatoryImageProps;
}

const ErrorLayout: React.FC<ErrorLayoutProps> = ({
  code,
  title,
  description,
  primaryCTA,
  showBackToHome,
  image,
}) => {
  const { locale, defaultLocale } = useRouter();

  return (
    <div
      className={`mt-48 flex flex-row items-center justify-between gap-36 lg:mt-24 ${
        SECTION_MARGIN_MAP[SPACING.MEDIUM]
      }`}
    >
      <div className="flex-1 text-primary">
        <span className="text-xs font-semibold uppercase">
          {"errorCodeTitle"}
        </span>
        <h1 className="mt-1 font-headings text-5xl font-semibold">{title}</h1>

        <RichText className="mt-6 text-sm text-body" content={description} />

        <div className="mt-6 lg:mt-16">
          <Button className="text-center" fullWidth {...primaryCTA} />
          {showBackToHome && <div className="mt-4 text-center text-sm" />}
        </div>
      </div>
      <div className="hidden flex-1 justify-center lg:block">
        <Image {...image} layout="responsive" alt={image.alt} />
      </div>
    </div>
  );
};

export default ErrorLayout;

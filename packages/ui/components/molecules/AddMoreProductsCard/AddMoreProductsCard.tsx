import AddCircle from "../../atoms/AddCircle";
import Link from "next/link";
import React from "react";

export interface AddMoreProductsCardProps {
  empty?: boolean;
}

const AddMoreProductsCard: React.FC<AddMoreProductsCardProps> = ({ empty }) => {
  return (
    <Link href="/products">
      <a>
        <div className="rounded-2xl border border-dashed border-accent px-10 py-8">
          <div className="flex items-center gap-10">
            <AddCircle className="my-4" />
            <div className="flex flex-col gap-2">
              <div className="font-headings text-sm font-semibold text-primary">
                "kkk"
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default AddMoreProductsCard;

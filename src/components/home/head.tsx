import type { FC } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
const Head: FC = () => {
  return (
    <div className="flex items-center justify-between md:items-center gap-4 mb-8">
      <div>
        <h1 className="text-3xl font-bold text-primary">Notlarım</h1>
        <p className="text-secondary">
          Tüm notlarınızı burada görüntüleyin ve yönetin
        </p>
      </div>
      <Link
        to="/create"
        className="flex  items-center bg-primary text-text-primary hover:bg-primary-hover py-2 px-4 rounded-md shadow-sm transition whitespace-nowrap"
      >
        <Plus />
        Yeni Not Ekle
      </Link>
    </div>
  );
};

export default Head;

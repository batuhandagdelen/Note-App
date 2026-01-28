import React, { type FC } from "react";
import { Link } from "react-router-dom";

const NotFound: FC = () => {
  return (
    <div className="card p-10 text-center">
      <div className="flex flex-col items-center">
        <div className="text-6xl mb-4">🔎</div>

        <h1 className="text-2xl font-bold text-error mb-3">Not Bulunamadı</h1>

        <p className="text-text-secondary mb-6">
          Aradığınız not bulunamadı. Silinmiş olabilir veya geçersiz bir
          bağlantı kullanıyor olabilirsiniz
        </p>

        <Link
          to="/"
          className="text-primary hover:text-primary-hover transition"
        >
          Anasayfaya Dön
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

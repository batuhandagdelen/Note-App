import { Divide, MoveLeft, Pencil, Trash } from "lucide-react";
import type { FC } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../components/utils/helpers";
import Markdown from "react-markdown";
import { deleteNote } from "../../components/redux/slices/noteSlice";
import { toast } from "react-toastify";
import NotFound from "../../components/not-found";
const Detail: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();

  const { notes } = useAppSelector((store) => store.note);

  const note = notes.find((note) => note.id === id);

  // sil butonuna tıklanınca
  const handleDelete = () => {
    if (!confirm("Silmek istediğinize emin misiniz?")) return;

    dispatch(deleteNote(note!.id));
    toast.success("Not başarıyla silindi");
    navigate("/");
  };

  if (!note) return <NotFound />;
  return (
    <div className="flex flex-col gap-6">
      <div className="flex justify-between sm:items-center gap-4 animate-fade-in">
        {/* üst sol taraf */}
        <div className="flex items-center">
          <Link
            to="/"
            className="p-2 rounded-full text-text-secondary hover:text-text-primary transition hover:bg-background"
          >
            <MoveLeft />
          </Link>

          <h1 className="text-2xl font-bold text-text-primary">Not Detayı</h1>
        </div>
        {/* üst sağ taraf */}

        <div className="flex gap-3">
          <Link
            to={`/edit/${id}`}
            className="flex items-center justify-center px-4 py-2 rounded-md bg-primary shadow-sm text-white hover:bg-primary-hover transition "
          >
            <Pencil className="size-4 mr-1.5" />
            Düzenle
          </Link>

          <button
            onClick={handleDelete}
            className="flex items-center justify-center px-4 py-2 rounded-md bg-error shadow-sm text-white hover:bg-error-hover transition"
          >
            <Trash className="size-4 mr-1.5" />
            Sil
          </button>
        </div>
      </div>

      {/* içerik kısmı */}

      <div className="card p-6 sm:p-8 animate-slide-up">
        {/* başlık */}
        <h1 className="text-3xl font-bold text-text-primary mb-6">
          {note?.title}
        </h1>

        {/* etiketler */}
        {note?.tags.map((tag, index) => (
          <div
            key={index}
            className="bg-primary text-white inline-flex rounded-full text-sm py-1 px-3 me-3"
          >
            {tag}
          </div>
        ))}

        {/* içerik */}

        <div className="prose border-t border-border pt-3 mt-6">
          <Markdown>{note?.content}</Markdown>
        </div>
      </div>
    </div>
  );
};

export default Detail;

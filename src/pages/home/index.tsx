import { useState, type FC } from "react";
import Head from "../../components/home/head";
import Filter from "../../components/home/filter";
import List from "../../components/home/list";
import Total from "../../components/home/total";
import { useAppSelector } from "../../components/utils/helpers";
const Home: FC = () => {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const { notes } = useAppSelector((store) => store.note);

  const filtredNotes = notes.filter((note) => {
    // başlık filtrelemesi
    const titleFilter = note.title.toLowerCase().includes(title.toLowerCase());

    // etiket filtrelemesi
    const tagsFilter = tags.every((tag) => note.tags.includes(tag));

    return titleFilter && tagsFilter;
  });
  return (
    <>
      <Head />
      <Filter title={title} setTitle={setTitle} tags={tags} setTags={setTags} />
      <List notes={filtredNotes} />
      <Total totalCount={notes.length} filteredCount={filtredNotes.length} />
    </>
  );
};

export default Home;

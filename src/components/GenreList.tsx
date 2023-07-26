import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data, error } = useGenres();
  return (
    <div>
      {error && "error"}
      <ul>
        {data.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;

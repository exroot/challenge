export const getAllFilesData = async (filter = "") => {
  const request = await fetch(
    `http://localhost:4000/files/data?filename=${filter}`
  );
  return await request.json();
};

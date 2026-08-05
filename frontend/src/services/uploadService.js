import API from "./api";

export const uploadMenuImage = (file) => {

    const formData = new FormData();

    formData.append("file", file);

    return API.post("/upload/menu", formData, {

        headers: {

            "Content-Type": "multipart/form-data"

        }

    });

};
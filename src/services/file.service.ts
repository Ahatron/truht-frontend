import base from ".";

class FileService {
  async getFile(fileId: string) {
    try {
      const file = await base.get(`/file/${fileId}`, { responseType: "blob" });

      return file.data;
    } catch (e) {
      console.error("File loading error: \n", e);
    }
  }
}

export default new FileService();
import base from ".";

class FileService {
  async getFile(fileId: number) {
    try {
      const file = base.get(`/file/${fileId}`);

      return file;
    } catch (e) {
      console.error("File loading error: \n", e);
    }
  }
}

export default new FileService();
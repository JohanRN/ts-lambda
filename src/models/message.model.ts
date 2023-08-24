class Message {
  constructor(
    public status: number,
    public message: string,
    public data: any,

  ) {
    this.status = status;
    this.message = message;
    this.data = data;
  }

  async response() {
    const objResponse = {
      statusCode: this.status,
      headers: { 'Content-Type': 'application/json' }, // Configurar el encabezado Content-Type
      body: JSON.stringify(this),
    }
    return objResponse;
  }
}

export default Message;
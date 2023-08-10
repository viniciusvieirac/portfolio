export default function Form() {
  return (
    <>
      <form
        id="contact"
        action=""
        className="bg-black flex justify-center items-center relative"
        style={{ height: "60vh" }}
      >
        <div className="flex flex-col items-center" style={{ width: "100%" }}>
          <h1 className="text-zinc-600 font-bold text-4xl">Entre em contato</h1>
          <input
            type="text"
            className="border w-80 border-gray-300 rounded-md p-3 bg-transparent text-white mt-4 focus:outline-none focus:border-zinc-600"
            placeholder="Nome"
          />
          <input
            type="email"
            className="border w-80 border-gray-300 rounded-md p-3 bg-transparent text-white mt-4 focus:outline-none focus:border-zinc-600"
            placeholder="E-mail"
          />
          <textarea
            className="border w-80 border-gray-300 rounded-md p-3 bg-transparent text-white mt-4 focus:outline-none focus:border-zinc-600"
            rows={5}
            placeholder="Sua mensagem"
            name=""
            id=""
          ></textarea>
        </div>
      </form>
    </>
  );
}

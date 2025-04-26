"use client"

function Addquestion() {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  }

  return (
    <main>
      <div className="addquestion flex flex-col justify-center items-center h-screen w-screen bg-gradient-to-b from-red-600 to-blue-700">
        <h1 className="font-extrabold text-3xl mb-6">Add Dilemma</h1>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <input type="text" name="question" placeholder="Red" required />
            <input type="text" name="answer" placeholder="Blue" required />
            <button type="submit">Add Question</button>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Addquestion
"use client"


function Addquestion() {

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault(); // Prevent the default form submission behavior
  }

  return (
    <main>
      <h1>Add Dilemma</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input type="text" name="question" placeholder="Red" required />
          <input type="text" name="answer" placeholder="Blue" required />
          <button type="submit">Add Question</button>
        </form>
      </div>
    </main>
  )
}

export default Addquestion
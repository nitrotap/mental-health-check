/* js file for rendering a single question to screen 
 * programmatically displays answer boxes
*/

const Question = (props) => {
    const { currentQuestion, setCurrentQuestion, handleSubmit } = props;

    return (
        <div>
            <div>
                {currentQuestion.question}
            </div>
            {currentQuestion.response.map((i, index) => {
                return (
                    <button type="submit" key={index} onClick={() => {
                        handleSubmit(currentQuestion.response[index])
                    }}>
                        {currentQuestion.response[index].text}
                    </button>
                )
            })}
        </div>
    )
}

export default Question

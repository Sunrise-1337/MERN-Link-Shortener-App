const toConcatErrors = (errors) => {
    errors.array().reduce((acc, el, i) => {
        const isFirstElement = i === 0,
            modifiedMessage = ' and ' + el.msg[0].toLowerCase() + el.msg.slice(1)

        acc += (isFirstElement ? el.msg : modifiedMessage)
    }, '')
}

const toHandleValidationErrors = (response, errors) => {
    if (!errors.isEmpty()) {
        response.status(400).json({
            message: toConcatErrors(errors)
        })

        return
    }
}
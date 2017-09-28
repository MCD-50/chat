class ChatForm
{
	constructor (options = { })
	{
		this.options   = Object.assign({ }, ChatForm.OPTIONS, options)
		this.$element  = $(ChatForm.TEMPLATE)

		this.$input    = this.$element.find('.frappe-chat-form-input')
		this.$element.find('.frappe-chat-form-send').css({
			'background-color': this.options.color.primary,
					   'color': '#FEFEFE' // TODO: This should be autodetected.
		})
	}

	submit (callback)
	{
		this.$element.submit((event) => {
			if (!event.isDefaultPrevented() )
				 event.preventDefault()

			const value  = this.$input.val()
			if ( value !== "" )
			{
				const message = { content: value }
				
				callback(message)

				this.$input.val("")
			}
		})
	}
}
ChatForm.OPTIONS  =
{
	color:
	{
		primary: '#7575FF'
	}
}
ChatForm.TEMPLATE = 
`
<form>
	<div class="input-group">
		<div class="frappe-chat-form-emoji input-group-btn">
			
		</div>
		<input
			class="frappe-chat-form-input form-control"
			placeholder="Type a message..."/>
		<div class="input-group-btn">
			<button class="frappe-chat-form-send btn btn-default">
				<i class="glyphicon glyphicon-send"/>
			</button>
		</div>
	</div>
</form>
`

export default ChatForm
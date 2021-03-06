import Component from '../Component'

class Panel extends Component {
	constructor (...options) {
		super (Panel.OPTIONS, ...options)

		this.$element = $(Panel.TEMPLATE)

		this.init()
	}

	init   ( ) {
		super.init()
		
		var $heading = this.$element.find('.panel-heading')

		if ( this.options.title ) {
			$heading.find('.panel-title').html(this.options.title)
		} else {
			$heading.hide()
		}

		if ( this.options.color ) {
			$heading.css({
				'background-color': this.options.color.primary,
						     color: '#FEFEFE'
			})
		}
	}

	render ( ) {
		
	}
}

Panel.OPTIONS  = 
{

}

Panel.TEMPLATE = 
`
<div class="panel panel-default">
	<div class="panel-heading">
		<div class="panel-title">
			
		</div>
	</div>
	<div class="panel-body">
		
	</div>
</div>
`

export default Panel
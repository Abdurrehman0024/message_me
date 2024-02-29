// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import * as jquery from "jquery"
import "semantic-ui"
import "controllers"
$(document).on('turbo:load', function() {
    console.log('loaded turbo links')
    $('.ui.dropdown').dropdown()
});


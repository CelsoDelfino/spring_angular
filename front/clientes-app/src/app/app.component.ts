import { Component, AfterViewInit } from '@angular/core';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  title = 'clientes-app';

  ngAfterViewInit(): void {
    (function ($) {
      'use strict';

      // Toggle the side navigation
      $('#sidebarToggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sb-sidenav-toggled');
      });
    })(jQuery);
  }
}

/**
* 2007-2019 PrestaShop
*
* NOTICE OF LICENSE
*
* This source file is subject to the Academic Free License (AFL 3.0)
* that is bundled with this package in the file LICENSE.txt.
* It is also available through the world-wide-web at this URL:
* http://opensource.org/licenses/afl-3.0.php
* If you did not receive a copy of the license and are unable to
* obtain it through the world-wide-web, please send an email
* to license@prestashop.com so we can send you a copy immediately.
*
* DISCLAIMER
*
* Do not edit or add to this file if you wish to upgrade PrestaShop to newer
* versions in the future. If you wish to customize PrestaShop for your
* needs please refer to http://www.prestashop.com for more information.
*
*  @author  PrestaShop SA <contact@prestashop.com>
*  @copyright 2007-2019 PrestaShop SA
*  @license   http://opensource.org/licenses/afl-3.0.php  Academic Free License (AFL 3.0)
*  International Registered Trademark & Property of PrestaShop SA
*
* Don't forget to prefix your containers with your own identifier
* to avoid any conflicts with others containers.
*/

$(document).ready(function() {
  $('#iconcarousel').addClass('js-iconcarousel');

  var arr = $('#iconcarousel').children();

  function showItems() {
    for (var i = 0; i < 6; i++) {
      var num = Math.floor(Math.random() * arr.length);

      if (!arr.eq(num).hasClass('show')) {
        arr.eq(num).removeClass('d-none').addClass('show');
      } else if (!!arr.eq(num).nextAll('.d-none').eq(0).length) {
        arr.eq(num).nextAll('.d-none').eq(0).removeClass('d-none').addClass('show');
      } else {
        arr.eq(num).prevAll('.d-none').eq(0).removeClass('d-none').addClass('show');
      }
    }
  }

  showItems();

  setInterval(function() {
    $('.iconcarousel-item').addClass('d-none').removeClass('show');
    setTimeout(showItems, 100);
  }, 5000);
});

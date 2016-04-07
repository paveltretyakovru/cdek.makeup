let InitVkModules = () => {
  VK.Widgets.Group("vk_groups", {mode: 2, width: "220", height: "400", wide: 1, color3: '#5A8422'}, 116053188);
  $('.js-show-vk-news').webuiPopover({url:'#vk-news'});
}

export default InitVkModules;

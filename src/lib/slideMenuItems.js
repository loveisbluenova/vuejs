module.exports = [
  {
    type: 'tree',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    items: [
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Dashboard v1',
        router: {
          name: 'DashboardV1'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Dashboard v2',
        router: {
          name: 'DashboardV2'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'InfoBox',
        router: {
          name: 'InfoBoxExample'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Chart.js',
        router: {
          name: 'ChartExample'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Alert',
        router: {
          name: 'AlertExample'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'Modal',
        router: {
          name: 'ModalExample'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-circle-o',
        name: 'APIExample',
        router: {
          name: 'APIExample'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-users',
    name: 'Users',
    items: [
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Users',
        link: 'page/layout/top-nav.html'
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Administrator',
        link: 'page/layout/boxed.html'
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-book',
    name: 'Content',
    items: [
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Acupuncture',
        router: {
          name: 'General'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Materia Medica',
        router: {
          name: 'Icons'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'TCM Foundations',
        router: {
          name: 'Buttons'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Texts',
        router: {
          name: 'Sliders'
        }
      }
    ]
  },
  {
    type: 'tree',
    icon: 'fa fa-commenting',
    name: 'Feedback',
    items: [
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Content Request',
        router: {
          name: 'GeneralElements'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Bug Report',
        router: {
          name: 'AdvancedElements'
        }
      }
    ]
  },
  {
    type: 'item',
    icon: 'fa fa-gear',
    name: 'Settings',
    router: {
      name: 'WidgetsExample'
    }
  }
]

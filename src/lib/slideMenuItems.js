module.exports = [
  {
    type: 'item',
    icon: 'fa fa-dashboard',
    name: 'Dashboard',
    router: {
      name: 'Dashboard'
    }
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
        router: {
          name: 'Users'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Administrator',
        router: {
          name: 'Administrator'
        }
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
          name: 'Acupuncture'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Materia Medica',
        router: {
          name: 'Materiamedica'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'TCM Foundations',
        router: {
          name: 'Tcmfoundations'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Texts',
        router: {
          name: 'Texts'
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
          name: 'Contentrequest'
        }
      },
      {
        type: 'item',
        icon: 'fa fa-angle-double-right',
        name: 'Bug Report',
        router: {
          name: 'Bugreport'
        }
      }
    ]
  },
  {
    type: 'item',
    icon: 'fa fa-gear',
    name: 'Settings',
    router: {
      name: 'Settings'
    }
  }
]

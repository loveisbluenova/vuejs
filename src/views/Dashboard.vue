<template>
  <div class="dashboard">
    <row>
      <div class="col-md-4">
          <va-small-box
            color="green"
            icon="fa fa-flask"
            title="342"
            description="Formulas"
            moreText="Add New">
          </va-small-box>
          <va-small-box
            color="green"
            icon="fa fa-leaf"
            title="249"
            description="Herbs"
            moreText="Add New">
          </va-small-box>
      </div>
      <div class="col-md-8">       
        <div class="box">
          <div class="box-body">
            <!-- search form -->
            <form action="#" method="get" class="sidebar-form">
              <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                      <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                      </button>
                    </span>
              </div>
            </form>
            <!-- /.search form -->
          <!-- /input-group -->
          </div>
        <!-- /.box-body -->
        </div>
                
        <!-- TABLE: LATEST ORDERS -->
        <div class="box box-default">
          <div class="box-header with-border">
            <h3 class="box-title">Latest actions</h3>
            <div class="box-tools pull-right">
              <button type="button" class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i>
              </button>
              <button type="button" class="btn btn-box-tool" data-widget="remove"><i class="fa fa-times"></i></button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <div class="table-responsive">
              <table class="table no-margin">
                <thead>
                <tr>
                <th width="30"></th> 
                  <th>Name</th>
                  <th>By</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <td><i class="fa fa-pencil text-muted"></i></td>
                <td>Herb edited <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">5 min ago</div></td>
                  <td><a href="Profile.html">Ty Sang</a></td>
                </tr>
                <tr>
                <td><i class="fa fa-plus-circle text-muted"></i></td>
                <td>Herb added <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">2 hours ago</div></td>
                  <td><a href="Profile.html">Anna Sims</a></td>
                </tr>

                <tr>
                <td><i class="fa fa-user-times text-muted"></i></td>
                <td>User removed <a href="herb.html">Peter Pen </a><div class="text-muted">Yesterday 10:00PM</div></td>
                  <td><a href="Profile.html">Anna Sims</a></td>
                </tr>
                <tr>
                <td><i class="fa fa-pencil text-muted"></i></td>
                <td>Herb edited <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">Yesterday</div></td>
                  <td><a href="Profile.html">Ty Sang</a></td>
                </tr>
                <tr>
                <td><i class="fa fa-plus-circle text-muted"></i></td>
                <td>Flavour added <a href="herb.html">Sweet</a><div class="text-muted">1 Mar 2017 10:00 PM (PST)</div></td>
                  <td><a href="Profile.html">Anna Sims</a></td>
                </tr>
                <tr>
                <td><i class="fa fa-trash text-muted"></i></td>
                <td>Formula Category removed <a href="herb.html">Expel Parasites</a><div class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">1 Mar 2017 10:00 PM (PST)</div></td>
                  <td><a href="Profile.html">Oleg Grishin</a></td>
                </tr>
                <tr>
                <td><i class="fa fa-plus-circle text-muted"></i></td>
                <td>Formula Category created <a href="herb.html">Drain Dampness</a><div class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">1 Mar 2017 10:00 PM (PST)</div></td>
                  <td><a href="Profile.html">Anna Sims</a></td>
                </tr>
                <tr>
                <td><i class="fa fa-plus-circle text-muted"></i></td>
                <td>Formula added <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">1 Mar 2017 10:00 PM (PST)</div></td>
                  <td><a href="Profile.html">Oleg Grishin</a></td>
                </tr>
                <tr>
                <td><i class="fa fa-user-plus text-muted"></i></td>
                <td>User created <a href="herb.html">Oleg Grishin</a><p class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">1 Mar 2017 10:00 PM (PST)</p></td>
                  <td><a href="Profile.html">Anna Sims</a></td>
                </tr>
                
                <tr>
                <td><i class="fa fa-pencil text-muted"></i></td>
                <td>Formula edited <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">桂枝 (桂枝)</span></a><div class="text-muted">1 Mar 2017 10:00 PM (PST)</div></td>
                  <td><a href="Profile.html">Anna Sims</a></td>
                </tr>
                
                </tbody>
              </table>
            </div>
            <!-- /.table-responsive -->
          </div>
          <!-- /.box-body -->
          <div class="box-footer text-center">
            <a href="javascript:void(0)" class="uppercase">View All</a>
          </div>
          <!-- /.box-footer -->
        </div>
        <!-- /.box -->
      </div>

    </row>
  </div>
</template>

<script>
import VASmallBox from '../widgets/VASmallBox.vue'
import VAChatBox from '../widgets/VAChatBox.vue'
import VATodoList from '../widgets/VATodoList.vue'
import VAQuickMail from '../widgets/VAQuickMail.vue'
import VACalendar from '../widgets/VACalendar.vue'

export default {
  name: 'Dashboard',
  data () {
    return {

    }
  },
  methods: {
    clickToSmallBox () {
      alert('click!!!: clickToSmallBox')
    }
  },
  components: {
    'va-small-box': VASmallBox,
    'va-chat-box': VAChatBox,
    'va-todo-list': VATodoList,
    'va-quick-mail': VAQuickMail,
    'va-calendar': VACalendar
  }
}

</script>

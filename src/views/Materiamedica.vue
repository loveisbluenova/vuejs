<template>
<div class="row">
  
  
  
  
  
<div class="col-md-4">
        
<div class="box">
  
      <div class="box-body">
                  <div class="input-group input-group">
            <input type="text" name="table_search" class="form-control pull-left" placeholder="Search Formulas">
              <div class="input-group-btn">
                <button type="submit" class="btn btn-default"><i class="fa fa-search"></i></button>
              </div>
          </div>
      </div>
      
            <div class="box-body">
            
            <div class="alert alert-info alert-dismissible margin">
                      <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
                      <h4><i class="icon fa fa-info"></i> Note for Developers!</h4>
                      I have commented filters for Herbs, those ones below related to selected Formulas in the search bar
                  </div>
                <div class="form-group">
                    <label>Source Texts</label>
                    <select class="form-control select2" data-placeholder="Select Source Text" style="width: 100%;">
                        <option>Any</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                    </select>
                </div>
            <div class="form-group">
                    <label>Author</label>
                    <select class="form-control select2" multiple="multiple" data-placeholder="Select Author" style="width: 100%;">
                        <option>Zhu Zhen-Heng</option>
                        <option>Zhang Zhongjing</option>
                        <option>Cang Gong</option>
                        <option>Pien Chi'ao</option>
                        <option>Hua Tuo</option>
                        <option>Wang Shuhe</option>
                        <option>Huang Fumi</option>
                    </select>
                </div>
                      <div class="form-group">
                    <label>Categories</label>
                    <select class="form-control select2" multiple="multiple" data-placeholder="Select Categories" style="width: 100%;">
                        <option>Drain Dampness</option>
                        <option>Expel Parasites</option>
                        <option>Drain Dampness</option>
                        <option>Expel Parasites</option>
                        <option>Drain Dampness</option>
                        <option>Expel Parasites</option>
                        <option>Drain Dampness</option>
                    </select>
                </div>
                      <div class="form-group">
                    <label>Created</label>
                    <select class="form-control select2"  data-placeholder="Select creator" style="width: 100%;">
                        <option>Any</option>
                        <option>Anna Sims</option>
                        <option>Ty Sang</option>
                        <option>Oleg Grishin</option>
                        <option>Oliver Stone</option>
                        <option>Paul Walker</option>
                        <option>Penelope Cruz</option>
                    </select>
                </div>
                      <div class="form-group">
                    <label>Modified</label>
                    <select class="form-control select2"  data-placeholder="Select creator" style="width: 100%;">
                        <option>Any</option>
                        <option>Anna Sims</option>
                        <option>Ty Sang</option>
                        <option>Oleg Grishin</option>
                        <option>Oliver Stone</option>
                        <option>Paul Walker</option>
                        <option>Penelope Cruz</option>
                    </select>
                </div>
                
                <!-- THIS SHOULD BE SHOWN IF HERBS SELECTED IN THE SEARCH BAR ABOVE !-->
                <!--div class="form-group">
                    <label>Species</label>
                    <select class="form-control select2" multiple="multiple" data-placeholder="Select Species" style="width: 100%;">
                        <option>Zhu Zhen-Heng</option>
                        <option>Zhang Zhongjing</option>
                        <option>Cang Gong</option>
                        <option>Pien Chi'ao</option>
                        <option>Hua Tuo</option>
                        <option>Wang Shuhe</option>
                        <option>Huang Fumi</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Flavour</label>
                    <select class="form-control select2" multiple="multiple" data-placeholder="Select Flavour" style="width: 100%;">
                        <option>Zhu Zhen-Heng</option>
                        <option>Zhang Zhongjing</option>
                        <option>Cang Gong</option>
                        <option>Pien Chi'ao</option>
                        <option>Hua Tuo</option>
                        <option>Wang Shuhe</option>
                        <option>Huang Fumi</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Nature</label>
                    <select class="form-control select2" multiple="multiple" data-placeholder="Select Nature" style="width: 100%;">
                        <option>Zhu Zhen-Heng</option>
                        <option>Zhang Zhongjing</option>
                        <option>Cang Gong</option>
                        <option>Pien Chi'ao</option>
                        <option>Hua Tuo</option>
                        <option>Wang Shuhe</option>
                        <option>Huang Fumi</option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Source Texts</label>
                    <select class="form-control select2" data-placeholder="Select Source Text" style="width: 100%;">
                        <option>Any</option>
                        <option>Alaska</option>
                        <option>California</option>
                        <option>Delaware</option>
                        <option>Tennessee</option>
                        <option>Texas</option>
                        <option>Washington</option>
                    </select>
                </div>

                      <div class="form-group">
                    <label>Categories</label>
                    <select class="form-control select2" multiple="multiple" data-placeholder="Select Categories" style="width: 100%;">
                        <option>Drain Dampness</option>
                        <option>Expel Parasites</option>
                        <option>Drain Dampness</option>
                        <option>Expel Parasites</option>
                        <option>Drain Dampness</option>
                        <option>Expel Parasites</option>
                        <option>Drain Dampness</option>
                    </select>
                </div!-->
                
          <!-- /.search form -->
              <!-- /input-group -->
            </div>
            <!-- /.box-body -->
          </div>
        
        </div>
  
  
  
  
  
  
  
  
<div class="col-md-8">
          <!-- Custom Tabs -->
          <div class="nav-tabs-custom">
            <ul class="nav nav-tabs">
            <li><a href="#tab_1" data-toggle="tab">Activity</a></li>
              <li class="active"><a href="#tab_2" data-toggle="tab">Formulas</a></li>
              <li><a href="#tab_3" data-toggle="tab">Herbs</a></li>
            </ul>
            <div class="tab-content no-padding">
              
              <div class="tab-pane" id="tab_1">
                <div class="box-body"><h3>Activity</h3></div>

                <div class="box-body">
                           <div class="input-group pull-left">
                          <button type="button" class="btn btn-default pull-right" id="daterange-btn">
                            <span>
                              <i class="fa fa-calendar"></i> Date range picker
                            </span>
                            <i class="fa fa-caret-down"></i>
                          </button>
                        </div>
                      <ul class="pagination pagination no-margin pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">»</a></li>
                      </ul>

                </div>
              <div class="table-responsive">
                <table class="table no-margin">

                  <tbody>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-pencil text-muted"></i></td>
                  <td>Herb edited <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted" data-toggle="tooltip" title="" data-original-title="Server Time 1:00PM (GMT +7)">5 min ago</div></td>
                    <td><a href="Profile.html">Ty Sang</a></td>
                  </tr>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-plus-circle text-muted"></i></td>
                  <td>Herb added <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted">8 hours ago</div></td>
                    <td><a href="Profile.html">Anna Sims</a></td>
                  </tr>

                  <tr>
                  <td style="text-align:center"><i class="fa fa-user-times text-muted"></i></td>
                  <td>User removed <a href="herb.html">Peter Pen </a><div class="text-muted">Yesterday</div></td>
                    <td><a href="Profile.html">Anna Sims</a></td>
                  </tr>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-pencil text-muted"></i></td>
                  <td>Herb edited <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted">Yesterday</div></td>
                    <td><a href="Profile.html">Ty Sang</a></td>
                  </tr>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-plus-circle text-muted"></i></td>
                  <td>Flavour added <a href="herb.html">Sweet</a><div class="text-muted">1 March 2017</div></td>
                    <td><a href="Profile.html">Anna Sims</a></td>
                  </tr>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-trash text-muted"></i></td>
                  <td>Formula Category removed <a href="herb.html">Expel Parasites</a><div class="text-muted">1 March 2017</div></td>
                    <td><a href="Profile.html">Oleg Grishin</a></td>
                  </tr>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-plus-circle text-muted"></i></td>
                  <td>Formula Category created <a href="herb.html">Drain Dampness</a><div class="text-muted">1 March 2017</div></td>
                    <td><a href="Profile.html">Anna Sims</a></td>
                  </tr>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-plus-circle text-muted"></i></td>
                  <td>Formula added <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted">1 March 2017</div></td>
                    <td><a href="Profile.html">Oleg Grishin</a></td>
                  </tr>
                  <tr>
                  <td style="text-align:center"><i class="fa fa-user-plus text-muted"></i></td>
                  <td>User created <a href="herb.html">Oleg Grishin</a><div class="text-muted">1 March 2017</div></td>
                    <td><a href="Profile.html">Anna Sims</a></td>
                  </tr>
                  
                  <tr>
                  <td style="text-align:center"><i class="fa fa-pencil text-muted"></i></td>
                  <td>Formula edited <a href="herb.html">Gui Zhi (guì zhī) <span class="text-muted">桂枝 (桂枝)</span></a><div class="text-muted">1 March 2017</div></td>
                    <td><a href="Profile.html">Anna Sims</a></td>
                  </tr>
                  
                  </tbody>
                </table>
              </div>
              <!-- /.table-responsive -->
              <div class="box-footer clearfix">
                      <ul class="pagination pagination no-margin pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
              </div>
              <!-- /.tab-pane -->
              
              
              
              
              <div class="tab-pane active" id="tab_2">
                <div class="box-body"><h3>Formulas <span data-toggle="tooltip" title="" class="badge bg-green">251</span> <button type="button" class="btn btn-success pull-right" data-toggle="modal" data-target="#modalFormulaNew"><i class="fa fa-plus"></i> Add Formula</button></h3></div>
                
                <div class="box-body">
                           <div class="input-group pull-left">
                          <button type="button" class="btn btn-default pull-right" id="daterange-btn">
                            <span>
                              <i class="fa fa-calendar"></i> Date range picker
                            </span>
                            <i class="fa fa-caret-down"></i>
                          </button>
                        </div>
                      <ul class="pagination pagination no-margin pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">»</a></li>
                      </ul>

                </div>
                <table class="table table-hover">
                        <tbody>
                          <tr>
                            <td><a href="formula.html">Ai Fu Nuan Gong Wan <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">An Chong Tang <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">An Gong Niu Haung Wan <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">An Shen Ding Zhi Wan <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">An Tai Yin <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">Ba Zhen Tang <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">Bai Du San <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">Bai Shao <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="formula.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
              <div class="box-footer clearfix">
                      <ul class="pagination pagination no-margin pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
              </div>
              <!-- /.tab-pane -->

              
              
              
              
              <div class="tab-pane table-responsive no-padding" id="tab_3">
          <div class="box-body"><h3>Herbs <span data-toggle="tooltip" title="" class="badge bg-green">251</span> <button type="button" class="btn btn-success pull-right" data-toggle="modal" data-target="#modalHerbNew"><i class="fa fa-plus"></i> Add Herb</button></h3></div>
                <div class="box-body">
                           <div class="input-group pull-left">
                          <button type="button" class="btn btn-default pull-right" id="daterange-btn">
                            <span>
                              <i class="fa fa-calendar"></i> Date range picker
                            </span>
                            <i class="fa fa-caret-down"></i>
                          </button>
                        </div>
            <ul class="pagination pagination no-margin pull-right">
                  <li><a href="#">«</a></li>
              <li><a href="#">1</a></li>
                  <li><a href="#">2</a></li>
                  <li><a href="#">3</a></li>
                  <li><a href="#">»</a></li>
            </ul>


                </div>
                
                <table class="table table-hover">
                        <tbody>
                          <tr>
                            <td><a href="herb.html">Ai Ye <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Bai Shao <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                          <tr>
                            <td><a href="herb.html">Sheng Jiang <br><span class="text-muted">桂枝(桂枝)</span><br><span class="text-muted">Ramulus Cinnamomi Cassiae / Cinnamon Twig</span></a></td>
                            <td>
                      <div class="btn-group pull-right">
                                <button type="button" class="btn btn-default"><i class="fa fa-pencil"></i></button>
                                <button type="button" class="btn btn-default"><i class="fa fa-trash"></i></button>
                    </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    <!-- /.box-body -->
              <div class="box-footer clearfix">
                      <ul class="pagination pagination no-margin pull-right">
                        <li><a href="#">«</a></li>
                        <li><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">»</a></li>
                      </ul>
                    </div>
              </div>

            </div>
            <!-- /.tab-content -->
          </div>
          <!-- nav-tabs-custom -->
        </div>
      </div>
  
</template>

<script>
export default {
  name: 'Materiamedica',
  created () {

  }
}
</script>

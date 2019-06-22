var display=false;
$(document).ready(function(){
    $('#second').hide();
    $('#battle').click(function(){
      if(!display){
        display=true
        $('#second').show()
        $('#first').hide()
        $('#battle').html('Show Battle Data')
      }
      else{
        display=false;
        $('#second').hide()
        $('#first').show()
        $('#battle').html('Analyse Battle Data')
      }
      
    })
    $.ajax({
      type:'GET',
      contentType:'application/json',
      url:'/fulldata',
      success:function(res){
        console.log(res)
        var table = $("<tbody>");
        var header_row=$(table[0].insertRow(-1))

        var battle_No_cell=$("<th>")
        battle_No_cell.html('Battle No')
        header_row.append(battle_No_cell)

        var Name_cell=$("<th>")
        Name_cell.html('Battle Name')
        header_row.append(Name_cell)

        var year_cell=$("<th>")
        year_cell.html('Year')
        header_row.append(year_cell)

        var Attacker_King_cell=$("<th>")
        Attacker_King_cell.html('Attacker King')
        header_row.append(Attacker_King_cell)

        var Defender_king_cell=$("<th>")
        Defender_king_cell.html('Defender king')
        header_row.append(Defender_king_cell)

        var Attacker_house_cell=$("<th>")
        Attacker_house_cell.html('Attacker House')
        header_row.append(Attacker_house_cell)

        var Defender_house_cell=$("<th>")
        Defender_house_cell.html('Defender House')
        header_row.append(Defender_house_cell)

        var Attacker_outcome_cell=$("<th>")
        Attacker_outcome_cell.html('Attacker Outcome')
        header_row.append(Attacker_outcome_cell)

        var battle_type_cell=$("<th>")
        battle_type_cell.html('Battle Type')
        header_row.append(battle_type_cell)

        var Major_death_cell=$("<th>")
        Major_death_cell.html('Major Death')
        header_row.append(Major_death_cell)

        var Major_capture_cell=$("<th>")
        Major_capture_cell.html('Major Capture')
        header_row.append(Major_capture_cell)

        var Attacker_size_cell=$("<th>")
        Attacker_size_cell.html('Attacker Size')
        header_row.append(Attacker_size_cell)

        var Defender_size_cell=$("<th>")
        Defender_size_cell.html('Defender Size')
        header_row.append(Defender_size_cell)

        var Attacker_commander_cell=$("<th>")
        Attacker_commander_cell.html('Attacker Commander(S)')
        header_row.append(Attacker_commander_cell)

        var Defender_commander_cell=$("<th>")
        Defender_commander_cell.html('Defender Commander')
        header_row.append(Defender_commander_cell)

        var Location_cell=$("<th>")
        Location_cell.html('Location')
        header_row.append(Location_cell)

        var Region_cell=$("<th>")
        Region_cell.html('Region')
        header_row.append(Region_cell)

        res.forEach(element => {
          var data_row=$(table[0].insertRow(-1))

          var battle_no_cell=$("<td>");
          battle_no_cell.html(element.battle_number)
          data_row.append(battle_no_cell)

          var name_cell=$("<td>");
          name_cell.html(element.name)
          data_row.append(name_cell)

          var year_cell=$("<td>");
          year_cell.html(element.year)
          data_row.append(year_cell)

          var attacker_king_cell=$("<td>");
          attacker_king_cell.html(element.attacker_king)
          data_row.append(attacker_king_cell)

          var defender_king_cell=$("<td>");
          defender_king_cell.html(element.defender_king)
          data_row.append(defender_king_cell)

          var attacker_1_cell=$("<td>");
          attacker_1_cell.html(element.attacker_1)
          data_row.append(attacker_1_cell)

          var defender_1_cell=$("<td>");
          defender_1_cell.html(element.defender_1)
          data_row.append(defender_1_cell)

          var attacker_outcome_cell=$("<td>");
          attacker_outcome_cell.html(element.attacker_outcome)
          data_row.append(attacker_outcome_cell)

          var battle_type_cell=$("<td>");
          battle_type_cell.html(element.battle_type)
          data_row.append(battle_type_cell)

          var major_death_cell=$("<td>");
          major_death_cell.html(element.major_death)
          data_row.append(major_death_cell)

          var major_death_cell=$("<td>");
          major_death_cell.html(element.major_death)
          data_row.append(major_death_cell)

          var attacker_size_cell=$("<td>");
          attacker_size_cell.html(element.attacker_size)
          data_row.append(attacker_size_cell)

          var defender_size_cell=$("<td>");
          defender_size_cell.html(element.defender_size)
          data_row.append(defender_size_cell)

          var attacker_commander_cell=$("<td>");
          attacker_commander_cell.html(element.attacker_commander)
          data_row.append(attacker_commander_cell)

          var defender_commander_cell=$("<td>");
          defender_commander_cell.html(element.defender_commander)
          data_row.append(defender_commander_cell)

          var location_cell=$("<td>");
          location_cell.html(element.location)
          data_row.append(location_cell)

          var region_cell=$("<td>");
          region_cell.html(element.region)
          data_row.append(region_cell)
        });
       
        $("#main_table").append(table);
      }
    })
    $.ajax({
      type:'GET',
      contentType:'application/json',
      url:'/analytics',
      success:function(res){
          
          var table = $("<tbody>");
          // table[0].border = "5";
          most_act_att_row=$(table[0].insertRow(-1));
          
          var most_act_att_cell = $("<th>");
          most_act_att_cell.html('Most Active Attacker King');
          most_act_att_row.append(most_act_att_cell);

          
          var most_act_att_ans = $("<td>");
          most_act_att_ans.html(res.most_active_data.attacker_king);
          most_act_att_row.append(most_act_att_ans);

          //..............................
          most_act_def_row=$(table[0].insertRow(-1));
          
          var most_act_def_cell = $("<th>");
          most_act_def_cell.html('Most Active Defender King');
          most_act_def_row.append(most_act_def_cell);

          
          var most_act_def_ans = $("<td>");
          most_act_def_ans.html(res.most_active_data.defender_king);
          most_act_def_row.append(most_act_def_ans);

          //,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
          most_act_region_row=$(table[0].insertRow(-1));
          
          var most_act_region_cell = $("<th>");
          most_act_region_cell.html('Most Active region');
          most_act_region_row.append(most_act_region_cell);

          
          var most_act_region_ans = $("<td>");
          most_act_region_ans.html(res.most_active_data.region);
          most_act_region_row.append(most_act_region_ans);

          //.................................................
          most_act_name_row=$(table[0].insertRow(-1));
          
          var most_act_name_cell = $("<th>");
          most_act_name_cell.html('Most Active name');
          most_act_name_row.append(most_act_name_cell);

          
          var most_act_name_ans = $("<td>");
          most_act_name_ans.html(res.most_active_data.name);
          most_act_name_row.append(most_act_name_ans);

          //...............................................
          attacker_outcome_win_row=$(table[0].insertRow(-1));
          
          var attacker_outcome_win_cell = $("<th>");
          attacker_outcome_win_cell.html('Attacker Wins');
          attacker_outcome_win_row.append(attacker_outcome_win_cell);

          
          var attacker_outcome_win_ans = $("<td>");
          attacker_outcome_win_ans.html(res.attacker_outcome.win);
          attacker_outcome_win_row.append(attacker_outcome_win_ans);

           //...............................................
           attacker_outcome_loss_row=$(table[0].insertRow(-1));
          
           var attacker_outcome_loss_cell = $("<th>");
           attacker_outcome_loss_cell.html('Attacker loss');
           attacker_outcome_loss_row.append(attacker_outcome_loss_cell);

           
           var attacker_outcome_loss_ans = $("<td>");
           attacker_outcome_loss_ans.html(res.attacker_outcome.loss);
           attacker_outcome_loss_row.append(attacker_outcome_loss_ans);

            //...............................................
            var battle_types_row=$(table[0].insertRow(-1));
          
          var battle_types_cell = $("<th>");
          battle_types_cell.html('Battle Types');
          battle_types_row.append(battle_types_cell);

          
          var battle_types_ans = $("<td>");
         battle_types_ans.html(`${res.battle_type[0]}, ${res.battle_type[1]}, ${res.battle_type[2]}, ${res.battle_type[3]}`);
          battle_types_row.append(battle_types_ans);

           //...............................................
           var average_def_row=$(table[0].insertRow(-1));
          
           var average_def_cell = $("<th>");
           average_def_cell.html('Average Defender');
           average_def_row.append(average_def_cell);

           
           var average_def_ans = $("<td>");
           average_def_ans.html(parseInt(res.defender_size.average));
           average_def_row.append(average_def_ans);

             //...............................................
             var min_defender_row=$(table[0].insertRow(-1));
          
             var min_defender_cell = $("<th>");
             min_defender_cell.html('Minimum Defender');
             min_defender_row.append(min_defender_cell);
 
             
             var min_defender_ans = $("<td>");
             min_defender_ans.html(res.defender_size.min);
             min_defender_row.append(min_defender_ans);


             //...............................................
             var max_defender_row=$(table[0].insertRow(-1));
          
             var max_defender_cell = $("<th>");
             max_defender_cell.html('Maximum Defender');
             max_defender_row.append(max_defender_cell);
 
             
             var max_defender_ans = $("<td>");
             max_defender_ans.html(res.defender_size.max);
             max_defender_row.append(max_defender_ans);

           $("#analyse").append(table);
      // dvTable.html("");
  //    most_active.append(table);
              
      }
      
    })

})
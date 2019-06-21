$(document).ready(function(){
    $.ajax({
        type:'GET',
        contentType:'application/json',
        url:'/analytics',
        success:function(res){
            console.log(res.most_active_data);
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

             $("#most_active").append(table);
        // dvTable.html("");
    //    most_active.append(table);
                
        }
        
      })
})
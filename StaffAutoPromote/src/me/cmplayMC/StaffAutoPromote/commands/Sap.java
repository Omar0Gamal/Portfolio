package me.cmplayMC.StaffAutoPromote.commands;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import me.cmplayMC.StaffAutoPromote.Main;

public class Sap implements CommandExecutor {
	
	public static String Target;
	public static String Staff;
	private Main main = new Main();
	
	@Override
	public boolean onCommand(CommandSender 	sender, Command cmd, String Label, String[] args) {
		if(sender instanceof Player) {
			Player p = (Player) sender; 
			  if(cmd.getName().equalsIgnoreCase("sap")) {
				 Player target = Bukkit.getPlayerExact(args[1]);
			    if(args[0].equalsIgnoreCase("List")) {
			      if(!Main.Players.isEmpty()) {
			       for(int i = 0; i < Main.Players.size(); i++) {
			    	  Player t = Bukkit.getPlayerExact(Main.Players.get(i));
			    	  p.sendMessage(Main.Prefix + t.getName());
			       }
			      }else {
			    	  p.sendMessage(Main.Prefix + "No Issuo is found");
			      }
			    }else if(target != null) {
			    	target.sendMessage(Main.Prefix + p.getName() + " is reviewing the ticket and will message you soon");
			    	p.sendMessage(Main.Prefix + "Please message player " + target.getName() + " his issuo " + Main.Resons.get(p));
			    	Main.inWork.add(p.getName());
			    	Staff = p.getName();
			    	Target = target.getName();
			    }else {
			    	p.sendMessage(Main.Prefix + "That player is offline");
			    }
			    if(args[0].equalsIgnoreCase("Score")) {
			    	p.sendMessage(Main.Prefix + "Your Score is: " + main.getDatabase().getScore(p.getName()));
			    	
			    }else if(args[0].equalsIgnoreCase("Top")) {
			    	p.sendMessage(ChatColor.GOLD + "Staff");
					for(int i = 0; i < 10; i++) {
						p.sendMessage( ChatColor.GRAY + Main.Staffs.get(i) + ChatColor.GOLD +" Score:"+ ChatColor.GRAY + main.getDatabase().getScore(p.getName()));
					}
			    }else if(args[0].equalsIgnoreCase("End")) {
			    	if(p.hasPermission("Sap.staff")) {
						if(Main.inWork.contains(p.getName())) {
							Player t = Bukkit.getPlayerExact(Sap.Target);
							if(t != null) {
							t.sendMessage(Main.Prefix + "The staff member ended the support ticket if it was not helpful type no if it was type yes");
							Main.inWork.remove(p.getName());
							}
						}
					}
			    }
			}
		}
		return true;
	}

}

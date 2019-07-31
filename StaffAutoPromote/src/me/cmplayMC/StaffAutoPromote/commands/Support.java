package me.cmplayMC.StaffAutoPromote.commands;

import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import me.cmplayMC.StaffAutoPromote.Main;

public class Support implements CommandExecutor {

	@Override
	public boolean onCommand(CommandSender sender, Command cmd, String Lable, String[] args) {
		if(sender instanceof Player) {
		  Player p = (Player) sender;
			if(cmd.getName().equalsIgnoreCase("Support")) {
				if(args.length != 0) {
					p.sendMessage(Main.Prefix + "Thanks for submitting the support ticket");
					p.sendMessage(Main.Prefix + "A staff member will review it soon");
					Main.Players.add(p.getName());
					Main.Resons.put(p, args);
				}else {
					p.sendMessage(Main.Prefix + "You need to put a reson");
					return false;
				}
			}
		}else {
			sender.sendMessage(ChatColor.RED + "You can only use this command in the game");
		}
		return true;
	}

}

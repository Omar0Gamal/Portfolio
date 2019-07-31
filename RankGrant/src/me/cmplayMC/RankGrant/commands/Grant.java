package me.cmplayMC.RankGrant.commands;

import org.bukkit.Bukkit;
import org.bukkit.ChatColor;
import org.bukkit.command.Command;
import org.bukkit.command.CommandExecutor;
import org.bukkit.command.CommandSender;
import org.bukkit.entity.Player;

import me.cmplayMC.RankGrant.Main;
import me.cmplayMC.RankGrant.gui.SelectRankGui;

public class Grant implements CommandExecutor{

	@Override
	public boolean onCommand(CommandSender sender, Command cmd, String lable, String[] args) {
	 if(sender instanceof Player) {
		if(cmd.getName().equalsIgnoreCase("Grant")) {
			Player p = (Player) sender;
			if(p.hasPermission("grant.use")) {
			if(args.length != 0) {
				Player target = Bukkit.getPlayerExact(args[0]);
				if (target == null) {
				p.sendMessage("Player " + args[0] + " is not online!");
				return true;
				} else {
						Main.target = target;
			            SelectRankGui i = new SelectRankGui();
			             i.openInv(p,target);
				}
			}else {
				p.sendMessage(ChatColor.GOLD + "Please put a player name");
				return true;
			}
		}
	   }
	 }else {
		 sender.sendMessage(ChatColor.RED + "You can only use this command in the game");
		 return true;
	 }
		
		return true;
	}

}

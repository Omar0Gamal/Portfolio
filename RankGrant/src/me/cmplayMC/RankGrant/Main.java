package me.cmplayMC.RankGrant;

import org.bukkit.Bukkit;
import org.bukkit.entity.Player;
import org.bukkit.plugin.PluginManager;
import org.bukkit.plugin.RegisteredServiceProvider;
import org.bukkit.plugin.java.JavaPlugin;

import me.cmplayMC.RankGrant.commands.Grant;
import me.cmplayMC.RankGrant.events.ConfiermInvEvent;
import me.cmplayMC.RankGrant.events.SelectRankInvEvent;
import me.cmplayMC.RankGrant.events.SelectResonInvEvent;
import net.milkbowl.vault.permission.Permission;

public class Main extends JavaPlugin {
	
	private static Permission perms = null;
	
	public static Player target;
	public static String rank;
	public static String reson;
	public static boolean isleft;

	@Override
	public void onEnable() {
		PluginManager pm = Bukkit.getPluginManager();
		
		this.getCommand("Grant").setExecutor(new Grant());
		
		pm.registerEvents(new ConfiermInvEvent(), this);
		pm.registerEvents(new SelectRankInvEvent(), this);
		pm.registerEvents(new SelectResonInvEvent(), this);
		setupPermissions();
	}
	@Override
	public void onDisable() {
		
	}
	private boolean setupPermissions() {
        RegisteredServiceProvider<Permission> rsp = getServer().getServicesManager().getRegistration(Permission.class);
        perms = rsp.getProvider();
        return perms != null;
    }
	public static Permission getPermissions() {
        return perms;
    }
}

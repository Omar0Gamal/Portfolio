package me.cmplayMC.RankGrant.gui;

import java.util.ArrayList;

import org.bukkit.ChatColor;
import org.bukkit.DyeColor;
import org.bukkit.Material;
import org.bukkit.entity.Player;
import org.bukkit.inventory.Inventory;
import org.bukkit.inventory.ItemStack;
import org.bukkit.inventory.meta.ItemMeta;
import org.bukkit.plugin.Plugin;

import me.cmplayMC.RankGrant.Main;

public class SelectRankGui {

	private Plugin plugin = Main.getPlugin(Main.class);

	@SuppressWarnings("deprecation")
	public void openInv(Player p, Player Target) {

		String splitter = ChatColor.DARK_GRAY + "+==============+===============+";
 
		Inventory i = plugin.getServer().createInventory(null, 36,ChatColor.GOLD + "Select Rank");

		ItemStack Member = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.GREEN.getWoolData());
		ItemMeta Membermeta = Member.getItemMeta();
		ArrayList<String> Memberlore = new ArrayList<String>();
		Memberlore.add(splitter);
		Memberlore.add(ChatColor.GOLD + "Right Click to add");
		Memberlore.add(ChatColor.GOLD + "Left Click to Set");
		Memberlore.add(ChatColor.GOLD + "Member rank to player" + Target.getName());
		Memberlore.add(splitter);
		Membermeta.setLore(Memberlore);
		Membermeta.setDisplayName(ChatColor.GREEN +"Member");
		Member.setItemMeta(Membermeta);

		ItemStack Rank1 = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.LIGHT_BLUE.getWoolData());
		ItemMeta Rank1meta = Rank1.getItemMeta();
		ArrayList<String> Rank1lore = new ArrayList<String>();
		Rank1lore.add(splitter);
		Rank1lore.add(ChatColor.GOLD + "Right Click to add");
		Rank1lore.add(ChatColor.GOLD + "Left Click to Set");
		Rank1lore.add(ChatColor.GOLD + "Elite rank to player" + Target.getName());
		Rank1lore.add(splitter);
		Rank1meta.setLore(Rank1lore);
		Rank1meta.setDisplayName(ChatColor.AQUA + "Elite");
		Rank1.setItemMeta(Rank1meta);

		ItemStack Rank2 = new ItemStack(Material.HARD_CLAY, 1, DyeColor.MAGENTA.getWoolData());
		ItemMeta Rank2meta = Rank2.getItemMeta();
		ArrayList<String> Rank2lore = new ArrayList<String>();
		Rank2lore.add(splitter);
		Rank2lore.add(ChatColor.GOLD + "Right Click to add");
		Rank2lore.add(ChatColor.GOLD + "Left Click to Set");
		Rank2lore.add(ChatColor.GOLD + "Hero rank to player" + Target.getName());
		Rank2lore.add(splitter);
		Rank2meta.setLore(Rank2lore);
		Rank2meta.setDisplayName(ChatColor.LIGHT_PURPLE + "Hero");
		Rank2.setItemMeta(Rank2meta);

		ItemStack Rank3 = new ItemStack(Material.HARD_CLAY, 1, DyeColor.ORANGE.getWoolData());
		ItemMeta Rank3meta = Rank3.getItemMeta();
		ArrayList<String> Rank3lore = new ArrayList<String>();
		Rank3lore.add(splitter);
		Rank3lore.add(ChatColor.GOLD + "Right Click to add");
		Rank3lore.add(ChatColor.GOLD + "Left Click to Set");
		Rank3lore.add(ChatColor.GOLD + "Legend rank to player" + Target.getName());
		Rank3lore.add(splitter);
		Rank3meta.setLore(Rank3lore);
		Rank3meta.setDisplayName(ChatColor.GOLD + "Legend");
		Rank3.setItemMeta(Rank3meta);

		ItemStack Rank4 = new ItemStack(Material.HARD_CLAY, 1, DyeColor.PURPLE.getWoolData());
		ItemMeta Rank4meta = Rank4.getItemMeta();
		ArrayList<String> Rank4lore = new ArrayList<String>();
		Rank4lore.add(splitter);
		Rank4lore.add(ChatColor.GOLD + "Right Click to add");
		Rank4lore.add(ChatColor.GOLD + "Left Click to Set");
		Rank4lore.add(ChatColor.GOLD + "EnderGod rank to player" + Target.getName());
		Rank4lore.add(splitter);
		Rank4meta.setLore(Rank4lore);
		Rank4meta.setDisplayName(ChatColor.DARK_PURPLE + "EnderGod");
		Rank4.setItemMeta(Rank4meta);

		ItemStack Helper = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.PINK.getWoolData());
		ItemMeta Helpermeta = Helper.getItemMeta();
		ArrayList<String> Helperlore = new ArrayList<String>();
		Helperlore.add(splitter);
		Helperlore.add(ChatColor.GOLD + "Right Click to add");
		Helperlore.add(ChatColor.GOLD + "Left Click to Set");
		Helperlore.add(ChatColor.GOLD + "Helper rank to player" + Target.getName());
		Helperlore.add(splitter);
		Helpermeta.setLore(Helperlore);
		Helpermeta.setDisplayName(ChatColor.LIGHT_PURPLE + "Helper");
		Helper.setItemMeta(Helpermeta);

		ItemStack Mod = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.LIGHT_BLUE.getWoolData());
		ItemMeta Modmeta = Mod.getItemMeta();
		ArrayList<String> Modlore = new ArrayList<String>();
		Modlore.add(splitter);
		Modlore.add(ChatColor.GOLD + "Right Click to add");
		Modlore.add(ChatColor.GOLD + "Left Click to Set");
		Modlore.add(ChatColor.GOLD + "Mod rank to player" + Target.getName());
		Modlore.add(splitter);
		Modmeta.setLore(Modlore);
		Modmeta.setDisplayName(ChatColor.AQUA + "Mod");
		Mod.setItemMeta(Modmeta);

		ItemStack Sr_Mod = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.BLUE.getWoolData());
		ItemMeta Sr_Modmeta = Sr_Mod.getItemMeta();
		ArrayList<String> Sr_Modlore = new ArrayList<String>();
		Sr_Modlore.add(splitter);
		Sr_Modlore.add(ChatColor.GOLD + "Right Click to add");
		Sr_Modlore.add(ChatColor.GOLD + "Left Click to Set");
		Sr_Modlore.add(ChatColor.GOLD + "Sr_Mod rank to player" + Target.getName());
		Sr_Modlore.add(splitter);
		Sr_Modmeta.setLore(Sr_Modlore);
		Sr_Modmeta.setDisplayName(ChatColor.BLUE + "Sr_Mod");
		Sr_Mod.setItemMeta(Sr_Modmeta);

		ItemStack Admin = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.YELLOW.getWoolData());
		ItemMeta Adminmeta = Admin.getItemMeta();
		ArrayList<String> Adminlore = new ArrayList<String>();
		Adminlore.add(splitter);
		Adminlore.add(ChatColor.GOLD + "Right Click to add");
		Adminlore.add(ChatColor.GOLD + "Left Click to Set");
		Adminlore.add(ChatColor.GOLD + "Admin rank to player" + Target.getName());
		Adminlore.add(splitter);
		Adminmeta.setLore(Adminlore);
		Adminmeta.setDisplayName(ChatColor.YELLOW + "Admin");
		Admin.setItemMeta(Adminmeta);

		ItemStack Sr_Admin = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.RED.getWoolData());
		ItemMeta Sr_Adminmeta = Sr_Admin.getItemMeta();
		ArrayList<String> Sr_Adminlore = new ArrayList<String>();
		Sr_Adminlore.add(splitter);
		Sr_Adminlore.add(ChatColor.GRAY + "Right Click to add");
		Sr_Adminlore.add(ChatColor.GOLD + "Left Click to Set");
		Sr_Adminlore.add(ChatColor.GRAY + "Sr_Admin rank to player" + Target.getName());
		Sr_Adminlore.add(splitter);
		Sr_Adminmeta.setLore(Sr_Adminlore);
		Sr_Adminmeta.setDisplayName(ChatColor.DARK_RED + "Sr_Admin");
		Sr_Admin.setItemMeta(Sr_Adminmeta);

		ItemStack Head_Admin = new ItemStack(Material.HARD_CLAY, 1, DyeColor.SILVER.getWoolData());
		ItemMeta Head_Adminmeta = Head_Admin.getItemMeta();
		ArrayList<String> Head_Adminlore = new ArrayList<String>();
		Head_Adminlore.add(splitter);
		Head_Adminlore.add(ChatColor.GOLD + "Right Click to add");
		Head_Adminlore.add(ChatColor.GOLD + "Left Click to Set");
		Head_Adminlore.add(ChatColor.GOLD + "Head_Admin rank to player" + Target.getName());
		Head_Adminlore.add(splitter);
		Head_Adminmeta.setLore(Head_Adminlore);
		Head_Adminmeta.setDisplayName(ChatColor.GRAY + "Head_Admin");
		Head_Admin.setItemMeta(Head_Adminmeta);

		ItemStack StaffManeger = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.WHITE.getWoolData());
		ItemMeta StaffManegermeta = StaffManeger.getItemMeta();
		ArrayList<String> StaffManegerlore = new ArrayList<String>();
		StaffManegerlore.add(splitter);
		StaffManegerlore.add(ChatColor.GOLD + "Right Click to add");
		StaffManegerlore.add(ChatColor.GOLD + "Left Click to Set");
		StaffManegerlore.add(ChatColor.GOLD + "StaffManeger rank to player" + Target.getName());
		StaffManegerlore.add(splitter);
		StaffManegermeta.setLore(StaffManegerlore);
		StaffManegermeta.setDisplayName(ChatColor.WHITE + "StaffManeger");
		StaffManeger.setItemMeta(StaffManegermeta);

		ItemStack ServerAdmin = new ItemStack(Material.HARD_CLAY, 1, DyeColor.RED.getWoolData());
		ItemMeta ServerAdminmeta = ServerAdmin.getItemMeta();
		ArrayList<String> ServerAdminlore = new ArrayList<String>();
		ServerAdminlore.add(splitter);
		ServerAdminlore.add(ChatColor.GOLD + "Right Click to add");
		ServerAdminlore.add(ChatColor.GOLD + "Left Click to Set");
		ServerAdminlore.add(ChatColor.GOLD + "ServerAdmin rank to player" + Target.getName());
		ServerAdminlore.add(splitter);
		ServerAdminmeta.setLore(ServerAdminlore);
		ServerAdminmeta.setDisplayName(ChatColor.RED + "ServerAdmin");
		ServerAdmin.setItemMeta(ServerAdminmeta);

		ItemStack Owner = new ItemStack(Material.STAINED_CLAY, 1, DyeColor.BLACK.getWoolData());
		ItemMeta Ownermeta = Owner.getItemMeta();
		ArrayList<String> Ownerlore = new ArrayList<String>();
		Ownerlore.add(splitter);
		Ownerlore.add(ChatColor.GOLD + "Right Click to add");
		Ownerlore.add(ChatColor.GOLD + "Left Click to Set");
		Ownerlore.add(ChatColor.GOLD + "Owner rank to player" + Target.getName());
		Ownerlore.add(splitter);
		Ownermeta.setLore(Ownerlore);
		Ownermeta.setDisplayName(ChatColor.BLACK + "Owner");
		Owner.setItemMeta(Ownermeta);

		i.setItem(10, Member);
		i.setItem(11, Rank1);
		i.setItem(12, Rank2);
		i.setItem(13, Rank3);
		i.setItem(14, Rank4);
		i.setItem(15, Helper);
		i.setItem(16, Mod);
		i.setItem(19, Sr_Mod);
		i.setItem(20, Admin);
		i.setItem(21, Sr_Admin);
		i.setItem(22, Head_Admin);
		i.setItem(23, StaffManeger);
		i.setItem(24, ServerAdmin);
		i.setItem(25, Owner);

		p.openInventory(i);
	}
}

import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const HomePage = ({ route, navigation }) => {
  const warehouseCount = route.params?.warehouseCount;
  const storeCount = route.params?.storeCount;
  const itemAvailCount = route.params?.itemAvailCount;
  const itemLowCount = route.params?.itemLowCount;
  const itemOutCount = route.params?.itemOutCount;

  const currentDate = new Date();
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formattedDate = currentDate.toLocaleDateString("id-ID", options);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("D:/ReactNative/firstApp/assets/logo.png")}
          style={styles.logo}
        />
        <Text style={styles.headerTitle}>Yaystock</Text>
      </View>

      <View style={styles.summary}>
        <View style={styles.dateRow}>
          <Text style={styles.dateText}>{formattedDate}</Text>
          <Image
            source={require("D:/ReactNative/firstApp/assets/calender.png")}
            style={styles.calendarIcon}
          />
        </View>
        <View style={styles.stockRow}>
          <View style={styles.stockItem}>
            <Text style={styles.stockLabel}>Stock In</Text>
            <Text style={styles.stockIn}>0</Text>
          </View>
          <View style={styles.stockItem}>
            <Text style={styles.stockLabel}>Stock Out</Text>
            <Text style={styles.stockOut}>0</Text>
          </View>
        </View>
      </View>

      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("AvaiableStock")}
        >
          <Image
            source={require("D:/ReactNative/firstApp/assets/avaiablestock.png")}
            style={styles.cardIcon}
            resizeMode="contain"
          />
          <Text style={styles.cardText}>
            <Text style={styles.cardNumber}>{itemAvailCount}</Text> Item
          </Text>
          <Text style={styles.cardSubtitle}>Available Stock</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("LowStock")}
        >
          <Image
            source={require("D:/ReactNative/firstApp/assets/lowstock.png")}
            style={styles.cardIcon}
            resizeMode="contain"
          />
          <Text style={styles.cardText}>
            <Text style={styles.cardNumber}>{itemLowCount}</Text> Item
          </Text>
          <Text style={styles.cardSubtitle}>Low Stock (below 15)</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate("OutStock")}
        >
          <Image
            source={require("D:/ReactNative/firstApp/assets/outstock.png")}
            style={styles.cardIcon}
            resizeMode="contain"
          />
          <Text style={styles.cardText}>
            <Text style={styles.cardNumber}>{itemOutCount}</Text> Item
          </Text>
          <Text style={styles.cardSubtitle}>Out of Stock</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.rowContainer}>
        <TouchableOpacity
          style={styles.rowItem}
          onPress={() => navigation.navigate("WarehouseList")}
        >
          <Image
            source={require("D:/ReactNative/firstApp/assets/warehouse.png")}
            style={styles.rowIcon}
            resizeMode="contain"
          />
          <Text style={styles.rowText}>
            <Text style={styles.rowNumber}>{warehouseCount}</Text> Warehouse
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.rowItem}
          onPress={() => navigation.navigate("StoreList")}
        >
          <Image
            source={require("D:/ReactNative/firstApp/assets/store.png")}
            style={styles.rowIcon}
            resizeMode="contain"
          />
          <Text style={styles.rowText}>
            <Text style={styles.rowNumber}>{storeCount}</Text> Store
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
            <Image
              source={require("D:/ReactNative/firstApp/assets/homepress.png")}
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate("StockingPage")}>
            <Image
              source={require("D:/ReactNative/firstApp/assets/stocking.png")}
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>Stocking</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate("HistoryPage")}>
            <Image
              source={require("D:/ReactNative/firstApp/assets/history.png")}
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>History</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerItem}>
          <TouchableOpacity onPress={() => navigation.navigate("ProfilePage")}>
            <Image
              source={require("D:/ReactNative/firstApp/assets/profile.png")}
              style={styles.footerIcon}
            />
            <Text style={styles.footerText}>Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F5EA",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2D3A40",
    padding: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
  },
  summary: {
    backgroundColor: "#E9F5FF",
    padding: 16,
    margin: 10,
    borderRadius: 10,
  },
  dateRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dateText: {
    fontSize: 20,
    fontWeight: "600",
  },
  calendarIcon: {
    width: 26,
    height: 26,
  },
  stockRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  stockItem: {
    alignItems: "center",
  },
  stockLabel: {
    fontSize: 16,
  },
  stockIn: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#4CAF50",
  },
  stockOut: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#F44336",
  },
  cardContainer: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#E9F5FF",
    padding: 10,
    marginVertical: 8,
    borderRadius: 10,
    alignItems: "center",
    height: 120,
  },
  cardIcon: {
    width: 40,
    height: 40,
    marginBottom: 10,
    resizeMode: "contain",
  },
  cardText: {
    fontSize: 22,
    fontWeight: "bold",
  },
  cardNumber: {
    fontSize: 24,
    fontWeight: "bold",
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#777",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    backgroundColor: "#FFF",
    borderTopWidth: 1,
    borderTopColor: "#DDD",
  },
  footerItem: {
    alignItems: "center",
  },
  footerIcon: {
    width: 24,
    height: 24,
    alignSelf: "center",
  },
  footerText: {
    fontSize: 14,
    marginTop: 4,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    marginBottom: 2,
  },
  rowItem: {
    backgroundColor: "#E9F5FF",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
    width: "45%",
    height: 90,
  },
  rowIcon: {
    width: 30,
    height: 30,
    marginBottom: 10,
  },
  rowText: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  rowNumber: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2D3A40",
  },
});

export default HomePage;
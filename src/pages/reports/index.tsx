import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import { style } from "./styles";
import { themas } from "../../global/themes";

export default function ReportsPage({ navigation }: any) {
  const screenWidth = Dimensions.get("window").width;
  const chartWidth = screenWidth - 30;

  // Handler para o botão de voltar do celular - fecha o app se estiver em Reports
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        // Fecha o app quando está em Reports
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress,
      );

      return () => subscription.remove();
    }, [navigation])
  );

  // Dados simples para o gráfico
  const chartData = {
    labels: ["Mercado", "Hotel", "Transporte", "Refeições", "Outro"],
    datasets: [
      {
        data: [450, 600, 250, 380, 220],
      },
    ],
  };

  const totalExpense = 1900;
  const averageExpense = totalExpense / 5;

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={style.header}>
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={style.headerTitle}>Relatórios</Text>
          <Text style={style.headerSubtitle}>Análise de gastos</Text>
        </View>
      </View>

      {/* Resumo */}
      <View style={style.summaryContainer}>
        <View style={style.summaryCard}>
          <Text style={style.summaryLabel}>Total Gasto</Text>
          <Text style={style.summaryAmount}>
            R$ {totalExpense.toLocaleString("pt-BR")}
          </Text>
        </View>

        <View style={style.summaryCard}>
          <Text style={style.summaryLabel}>Média por Categoria</Text>
          <Text style={style.summaryAmount}>
            R$ {averageExpense.toLocaleString("pt-BR")}
          </Text>
        </View>
      </View>

      {/* Gráfico */}
      <View style={style.chartContainer}>
        <Text style={style.chartTitle}>Gastos por Categoria</Text>
        
        <BarChart
          data={chartData}
          width={chartWidth}
          height={250}
          yAxisLabel=""
          yAxisSuffix=""
          chartConfig={{
            backgroundColor: themas.colors.primary,
            backgroundGradientFrom: themas.colors.primary,
            backgroundGradientTo: themas.colors.primary,
            color: () => themas.colors.secondary,
            labelColor: () => "#FFFFFF",
            decimalPlaces: 0,
          }}
          style={{
            marginVertical: 10,
            borderRadius: 8,
          }}
        />
      </View>

      {/* Legenda */}
      <View style={style.legendContainer}>
        <View style={style.legendItem}>
          <View style={style.legendBox} />
          <Text style={style.legendText}>Mercado - R$ 450</Text>
        </View>
        <View style={style.legendItem}>
          <View style={style.legendBox} />
          <Text style={style.legendText}>Hotel - R$ 600</Text>
        </View>
        <View style={style.legendItem}>
          <View style={style.legendBox} />
          <Text style={style.legendText}>Transporte - R$ 250</Text>
        </View>
        <View style={style.legendItem}>
          <View style={style.legendBox} />
          <Text style={style.legendText}>Refeições - R$ 380</Text>
        </View>
        <View style={style.legendItem}>
          <View style={style.legendBox} />
          <Text style={style.legendText}>Outro - R$ 220</Text>
        </View>
      </View>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

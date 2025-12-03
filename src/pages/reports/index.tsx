import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  BackHandler,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import { BarChart } from "react-native-chart-kit";
import DateTimePicker from "@react-native-community/datetimepicker";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { style } from "./styles";
import { themas } from "../../global/themes";

export default function ReportsPage({ navigation }: any) {
  const screenWidth = Dimensions.get("window").width;
  const chartWidth = screenWidth - 30;

  const [startDate, setStartDate] = useState(
    new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [lastEntries] = useState([
    { id: 1, category: "Mercado", amount: 120, date: "2025-12-01" },
    { id: 2, category: "Hotel", amount: 300, date: "2025-12-02" },
    { id: 3, category: "Transporte", amount: 50, date: "2025-12-03" },
    { id: 4, category: "Refeições", amount: 80, date: "2025-12-03" },
    { id: 5, category: "Outro", amount: 40, date: "2025-12-03" },
    { id: 6, category: "Carro", amount: 600, date: "2025-12-03" },
  ]);

  // Handler para o botão de voltar do celular - fecha o app se estiver em Reports
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        BackHandler.exitApp();
        return true;
      };

      const subscription = BackHandler.addEventListener(
        "hardwareBackPress",
        onBackPress,
      );

      return () => subscription.remove();
    }, [navigation]),
  );

  // Função para agrupar dados por categoria
  const getChartDataByCategory = () => {
    const categoryMap = new Map<string, number>();

    lastEntries.forEach((entry) => {
      const current = categoryMap.get(entry.category) || 0;
      categoryMap.set(entry.category, current + entry.amount);
    });

    const labels = Array.from(categoryMap.keys());
    const data = Array.from(categoryMap.values());

    return {
      labels,
      datasets: [
        {
          data,
        },
      ],
    };
  };

  // Dados dinâmicos baseados nas entradas
  const chartData = getChartDataByCategory();

  const handleStartDateChange = (event: any, selectedDate?: Date) => {
    setShowStartPicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const handleEndDateChange = (event: any, selectedDate?: Date) => {
    setShowEndPicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    <ScrollView style={style.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={style.header}>
        <View style={{ flex: 1, marginLeft: 15 }}>
          <Text style={style.headerTitle}>Relatórios</Text>
          <Text style={style.headerSubtitle}>Análise de gastos</Text>
        </View>
      </View>

      {/* Seleção de datas */}
      <View style={style.datePickerContainer}>
        <TouchableOpacity
          style={style.datePickerButton}
          onPress={() => setShowStartPicker(true)}
        >
          <Text style={style.datePickerText}>
            Início: {format(startDate, "dd/MM/yyyy", { locale: ptBR })}
          </Text>
        </TouchableOpacity>
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={handleStartDateChange}
          />
        )}

        <TouchableOpacity
          style={style.datePickerButton}
          onPress={() => setShowEndPicker(true)}
        >
          <Text style={style.datePickerText}>
            Fim: {format(endDate, "dd/MM/yyyy", { locale: ptBR })}
          </Text>
        </TouchableOpacity>
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={handleEndDateChange}
          />
        )}
      </View>

      {/* Gráfico */}
      <View style={style.chartContainer}>
        <Text style={style.chartTitle}>Gastos por Categoria</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={style.chartScrollContainer}
        >
          <BarChart
            data={chartData}
            width={Math.max(chartData.labels.length * 80, screenWidth - 100)}
            height={200}
            yAxisLabel="R$ "
            yAxisSuffix=""
            chartConfig={{
              backgroundColor: themas.colors.primary,
              backgroundGradientFrom: themas.colors.primary,
              backgroundGradientTo: themas.colors.primary,
              color: () => themas.colors.secondary,
              labelColor: () => "#FFFFFF",
              decimalPlaces: 0,
              propsForBackgroundLines: {
                strokeWidth: "1",
                stroke: "rgba(141, 198, 62, 0.2)",
                strokeDasharray: "5,5",
              },
              propsForLabels: {
                fontSize: 10,
              },
            }}
            style={{
              borderRadius: 8,
              marginVertical: 8,
            }}
            withInnerLines={true}
            withVerticalLabels={true}
            withHorizontalLabels={true}
            fromZero={true}
            segments={3}
          />
        </ScrollView>
      </View>

      {/* Últimas entradas */}
      <View style={style.lastEntriesContainer}>
        <Text style={style.lastEntriesTitle}>Últimas Entradas</Text>
        {lastEntries.map((entry) => (
          <View key={entry.id} style={style.lastEntryItem}>
            <Text style={style.lastEntryText}>
              {entry.category} - R$ {entry.amount.toLocaleString("pt-BR")} (
              {entry.date})
            </Text>
          </View>
        ))}
      </View>

      <View style={{ height: 80 }} />
    </ScrollView>
  );
}

using System;
using System.Data;
using System.Windows.Forms;
using System.Data.SqlClient;

namespace SQL_BD
{
    public partial class Form_Seller_NewBuy_NewProduct : Form
    {
        public Form_Seller_NewBuy_NewProduct()
        {
            InitializeComponent();
        }

        string ID_BIll;

        private void Form_Seller_NewBuy_NewProduct_Load(object sender, EventArgs e)
        {
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Buy_NewProduct". При необходимости она может быть перемещена или удалена.
            this.buy_NewProductTableAdapter.Fill(this.bD_Shop_4semDataSet.Buy_NewProduct);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Product". При необходимости она может быть перемещена или удалена.
            this.productTableAdapter.Fill(this.bD_Shop_4semDataSet.Product);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Buy". При необходимости она может быть перемещена или удалена.
            this.buyTableAdapter.Fill(this.bD_Shop_4semDataSet.Buy);
            // TODO: данная строка кода позволяет загрузить данные в таблицу "bD_Shop_4semDataSet.Seller_NewBuy". При необходимости она может быть перемещена или удалена.
            this.seller_NewBuyTableAdapter.Fill(this.bD_Shop_4semDataSet.Seller_NewBuy);

            SqlConnection con = new SqlConnection(@"Data Source=7E09;Initial Catalog=BD_Shop_4sem;Integrated Security=True");
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            con.Open();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "SELECT TOP (1) * From Bill order by ID desc";
            ID_BIll = cmd.ExecuteScalar().ToString();
            con.Close();

            seller_NewBuyDataGridView.DataSource = buy_ID_Bill_SearchTableAdapter.GetData(ID_BIll);
            product_availability_Search_ProductDataGridView.DataSource = product_availability_Search_ProductTableAdapter.GetData(Int32.Parse(ID_BIll));
        }

        private void button1_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(@"Data Source=7E09;Initial Catalog=BD_Shop_4sem;Integrated Security=True");
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            con.Open();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "select ID_PA from Buy_NewProduct where ID_Product = " + textBox1.Text + " and ID_Bill = " + ID_BIll;
            string ID_PA = cmd.ExecuteScalar().ToString();
            con.Close();

            buyTableAdapter.Insert(Int32.Parse(ID_BIll), Int32.Parse(ID_PA), Int32.Parse(textBox2.Text));
            seller_NewBuyDataGridView.DataSource = buy_ID_Bill_SearchTableAdapter.GetData(ID_BIll);
        }

        private void button3_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FM = new Form_Main();
            FM.Show();
        }

        private void button2_Click(object sender, EventArgs e)
        {
            this.Close();
            Form FSN = new Form_Seller_NewBuy();
            FSN.Show();
        }

        private void button4_Click(object sender, EventArgs e)
        {
            SqlConnection con = new SqlConnection(@"Data Source=7E09;Initial Catalog=BD_Shop_4sem;Integrated Security=True");
            SqlCommand cmd = new SqlCommand();
            cmd.Connection = con;
            con.Open();
            cmd.CommandType = CommandType.Text;
            cmd.CommandText = "exec Product_availability_delete " + ID_BIll;
            cmd.ExecuteNonQuery();
            con.Close();

            Form FSC = new Form_Seller_Check();
            FSC.Show();
        }
    }
}
